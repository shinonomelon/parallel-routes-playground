export function checkUserRole(): 'user' | 'admin' {
  // サンプルコード: ロールをランダムに返す
  const roles = ['user', 'admin']
  return roles[Math.floor(Math.random() * roles.length)] as 'user' | 'admin';
}
