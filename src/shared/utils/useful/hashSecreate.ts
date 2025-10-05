import sha256 from 'crypto-js/sha256'

/**
 * @description 使用 hash 对明文密码进行预处理
 * @param secreate 待加密的明文密码
 */
export function hashSecreate(secreate: string): string {
  return sha256(secreate).toString()
}
