export function stripId<Type extends { id?: string }>(object: Type): Type {
  let objClone = { ...object };
  delete objClone.id;
  return objClone;
}
