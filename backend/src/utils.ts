export function stripId<Type extends { id?: string }>(object: Type): Type {
  let objClone = { ...object };
  delete objClone.id;
  return objClone;
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}
