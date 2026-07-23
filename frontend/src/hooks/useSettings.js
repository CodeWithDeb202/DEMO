import{useNavigate,useLocation}from"react-router-dom";

function useSettings(){

const navigate=useNavigate();

const location=useLocation();

const activeTab=

location.pathname.split("/").pop()||

"general";

const changeTab=(tab)=>{

navigate(`/settings/${tab}`);

};

return{

activeTab,

changeTab

};

}

export default useSettings;