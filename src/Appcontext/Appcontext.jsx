import { createContext, useEffect, useState } from "react";
import api from "./api.js";
import { toast } from "react-toastify";
import { delay } from "./delay.js";



export const Appcontext = createContext();

export const Contextprovider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpages, settotalpages] = useState(0);
    const [search, setsearch] = useState("");
    const [category, setcategory] = useState("All Categories");
    const [limit, setlimit] = useState()
    const [loading, setloading] = useState(false);
    const [isLogin, setisLogin] = useState(false)
    const [user, setuser] = useState({});
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [authLoading, setAuthLoading] = useState(true);




    const productFetch = async () => {
        try {
            setloading(true);
            const res = await api.get("/Product/getproduct", {
                params: {
                    page: page,
                    search: debouncedSearch,
                    category: category === "All Categories" ? "" : category,
                    limit: limit
                }
            });
            await delay(5)
            setloading(false);
            if (res.data.success) {
                setProducts(res.data.product);
                console.log(res.data.product)
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }



    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);



    useEffect(() => {
        productFetch();
    }, [page, debouncedSearch, category, limit]);






    const isUserlogin = async () => {
        try {
            setAuthLoading(true);
            const res = await api.post("/Userroutes/isUserlogin");

            if (res.data.success) {
                setuser(res.data.userDetails);
                setisLogin(true);

            } else {
                setisLogin(false)
            }
        } catch (error) {
            setisLogin(false)
            toast.error(error.message);
        } finally {
            setAuthLoading(false);
        }
    }

    useEffect(() => {
        isUserlogin();

    }, [])



    useEffect(() => {
        console.log(isLogin);
        console.log(user);
    }, [isLogin, user])


    const Data = {
        products, setProducts,
        search, setsearch,
        page, setpage,
        setlimit, limit,
        category, setcategory,
        totalpages,
        loading, setloading,
        isLogin, setisLogin, authLoading,
        isUserlogin,
        user
    };







    return (
        <Appcontext.Provider value={Data}>{children}</Appcontext.Provider>
    );
};