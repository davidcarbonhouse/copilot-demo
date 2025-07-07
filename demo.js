/**
 * Demo #2
 * Explaining code
 * Prompt: "Explain what this function does like I’m a junior developer. Also explain how reduce() works."
 */

const cartTotal = items.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

/**
 * Demo #3
 * Refactoring code
 * Prompt: "Refactor this function to make it more readable."
 */

function showUserStatus(user) {
  if (user && user.isActive) {
    return 'Active';
  } else {
    if (!user) {
      return 'No user';
    } else {
      return 'Inactive';
    }
  }
}
