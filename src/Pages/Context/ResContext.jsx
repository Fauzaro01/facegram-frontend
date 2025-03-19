import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ResContext = createContext({
    userData: null,
    token: '',
    loading: true,
    gantiToken: () => {},
    masukanUser:() => {}
});

export const ResProvider = ({children}) => {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState(null); 

    const gantiToken = (token) => {
        setToken(token);
    }

    const masukanUser = (userdata) => {
        setUserData(userdata)
    }

    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function InitilisasiData() {
            const TokenUser = localStorage.getItem('token');

            if (TokenUser) {
                console.log("TEST 2")
                try {
                    await axios.get('http://localhost:8000/api/user', {
                        headers: {
                            Authorization: `Bearer ${TokenUser}`
                        }
                    }).then((response) => {
                        masukanUser(response.data.user);
                    }); 
                } catch (eror) {
                    console.log(eror)
                }
            }
            setloading(false);
        }

        InitilisasiData();
    })

    return <ResContext.Provider value={{token, userData, loading, masukanUser, gantiToken}}>{children}</ResContext.Provider>;
}