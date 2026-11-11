import { useEffect, useRef, useState } from 'react';
import { btnCls, btnSecCls, cardCls } from './util';

interface Props {
  titulo: string;
  onCapturar: (foto: Blob) => void;
  onCancelar: () => void;
}

export default function Camera({ titulo, onCapturar, onCancelar }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [erro, setErro] = useState('');
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    let cancelado = false;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setErro('Este navegador não permite abrir a câmera. Use o Chrome ou o Safari atualizado, com o site em HTTPS.');
      return;
    }
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then((stream) => {
        if (cancelado) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setPronto(true);
      })
      .catch(() => setErro('Não foi possível abrir a câmera. Permita o acesso à câmera no navegador e tente de novo.'));
    return () => {
      cancelado = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  function capturar() {
    const v = videoRef.current;
    if (!v || !v.videoWidth) return;
    const escala = Math.min(1, 800 / v.videoWidth);
    const c = document.createElement('canvas');
    c.width = Math.round(v.videoWidth * escala);
    c.height = Math.round(v.videoHeight * escala);
    c.getContext('2d')?.drawImage(v, 0, 0, c.width, c.height);
    c.toBlob((b) => { if (b) onCapturar(b); }, 'image/jpeg', 0.7);
  }

  return (
    <div className={cardCls}>
      <h2 className="mb-3 text-lg font-bold text-gray-900">{titulo}</h2>
      {erro ? (
        <p role="alert" className="mb-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{erro}</p>
      ) : (
        <video ref={videoRef} autoPlay playsInline muted className="mb-3 w-full rounded-xl bg-black" />
      )}
      <div className="flex gap-2">
        {!erro && (
          <button type="button" className={`${btnCls} flex-1`} disabled={!pronto} onClick={capturar}>
            Tirar foto e confirmar
          </button>
        )}
        <button type="button" className={btnSecCls} onClick={onCancelar}>Cancelar</button>
      </div>
    </div>
  );
}