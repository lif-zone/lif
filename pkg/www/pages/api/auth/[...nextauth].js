import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const is_correct_credentials = credentials=>
  credentials.username===process.env.NEXTAUTH_USERNAME &&
  credentials.password===process.env.NEXTAUTH_PASSWORD;

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign
            // in page. You can specify whatever fields you are expecting to
            // be submitted. e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {label: 'Username', type: 'text'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials){
                if (is_correct_credentials(credentials))
                {
                    const user = {id: 1, name: 'Admin'};
                    // Any object returned will be saved in `user` property of
                    // the JWT
                    return user;
                }
                return null;
            },
        }),
    ],
};

export default (req, res)=>NextAuth(req, res, options);
