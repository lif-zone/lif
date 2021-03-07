import {createContext, useContext} from 'react';
import {useRouter} from 'next/router';

const App_context = createContext();

export function App_wrapper({children}){
    const {locale} = useRouter();
    const state = {
        direction: locale=='he' && 'rtl',
    };
    return <App_context.Provider value={state}>
          {children}</App_context.Provider>;
}

export function use_app_context(){
    return useContext(App_context);
}
