export const UserRole = {
  admin: 'admin',
  editor: 'editor',
  guest: 'guest',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

function describeUserRole(role: UserRole): string {
  return `You are logged in as: ${RoleDescription[role]}`;
}


console.log(describeUserRole(UserRole.editor));
