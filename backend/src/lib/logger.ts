export default function logger(message: string) {
  // we can use this function to implement logging in the future with some 3rd party service like sentry
  console.log(`[${new Date().toISOString()}] ${message}`);
}
