const AuthRoutesMap = [

    {
        path: '/user',
        authRequired: true
    },
    {
        path: '/registerDriver',
        authRequired: false
    },
    {
        path: '/getDriverVehicle',
        authRequired: true
    },
    
    {
        path: '/login',
        authRequired: false
    },
    {
        path: '/validatoken',
        authRequired: false
    }
];

export default AuthRoutesMap;