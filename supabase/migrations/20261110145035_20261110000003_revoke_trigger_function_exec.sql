/*
# Revoke EXECUTE on trigger function from authenticated

The aplicador_set_updated_at() trigger function should only be called by the trigger,
not directly by authenticated users via REST RPC.
*/

REVOKE EXECUTE ON FUNCTION aplicador_set_updated_at() FROM authenticated;
