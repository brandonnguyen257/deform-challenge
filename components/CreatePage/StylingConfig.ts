export const CreatePageTextFieldSx = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            borderWidth: '2px'
        },
        '&:hover fieldset': {
            borderColor: 'white'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white'
        }
    }
};
export const SubmitButtonSx = {
    color: 'white',
    borderColor: 'white',
    borderWidth: '2px',
	'&:hover': {
		transform: 'scale(1.05)',
		boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
	},
	transition: 'transform 0.1s ease-in-out, boxShadow 0.3s ease-in-out'
};