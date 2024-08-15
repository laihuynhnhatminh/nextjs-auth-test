/**
 * Array of routes that is publicly available, no authentication needed
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/'];

/**
 * Array of routes that is private
 * @type {string[]}
 */
export const authRoutes: string[] = ['/auth/login', '/auth/register'];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/settings';

/**
 * Default redirect to login if user move to auth-protected route while not logged in
 * @type {string}
 */
export const DEFAULT_UNAUTH_REDIRECT: string = '/auth/login';