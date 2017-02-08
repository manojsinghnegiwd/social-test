import React from 'react';

// stateless function component
const Icon = ({iconName}) => {
	return <i className={`fa fa-${iconName}`}></i>
}

export default Icon;