import React from 'react';

function CrypLoading(Component) {
    return function whileLoadingComponent({ isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{ textAlign: 'centre', fontSize: '30px'}}>
                Currency data is loading...
            </p>
        );
    };
}
export default CrypLoading; 
