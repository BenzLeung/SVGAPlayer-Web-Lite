export default (u8a: any): string => {
  const CHUNK_SZ = 0x8000
  const changeArray: string[] = []

  for (let i = 0; i < u8a.length; i += CHUNK_SZ) {
    changeArray.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)))
  }

  return changeArray.join('')
}
