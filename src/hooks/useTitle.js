import { useEffect } from "react";

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Jannet Dekker`;
    },[title])
}

export default useTitle;