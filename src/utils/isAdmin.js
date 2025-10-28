export function isAdmin() {
  return localStorage.getItem('hopeAdminAuth') === 'true';
}

export function setAdmin(value) {
  if (value) {
    localStorage.setItem('hopeAdminAuth', 'true');
  } else {
    localStorage.removeItem('hopeAdminAuth');
  }
}

