export const flattenState = (state: { [key: number]: { [key: number]: any } }): { [key: string]: any } => {
  return Object.fromEntries(
    Object.entries(state).flatMap(
      ([outerKey, innerObj]) =>
        Object.entries(innerObj).map(
          ([innerKey, value]) => [`${outerKey}.${innerKey}`, value]
        )
    )
  );
};
