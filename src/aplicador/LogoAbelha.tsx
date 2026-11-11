interface LogoAbelhaProps {
  size?: number;
  className?: string;
}

// Para trocar a imagem, altere só o caminho abaixo.
// O arquivo precisa estar na pasta "public" do projeto.
const CAMINHO_LOGO = '/logo-aplicador.png';

export default function LogoAbelha({ size = 24, className = '' }: LogoAbelhaProps) {
  return (
    <img
      src={CAMINHO_LOGO}
      alt="Behave"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}