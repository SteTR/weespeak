import React from 'react'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import GoogleButton from 'react-google-button'
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BlankAppbar from './BlankAppbar' 
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		flexDirection: "column"
	},
	slogan: {
		marginBottom: "2em"
	}
}));

function userRegistered() {
	setTimeout(() => true, 3000);
}

export default function Login() {
	const classes = useStyles();
	return (
			<div className={classes.root}>
				<BlankAppbar />
				<Typography
					className={classes.slogan}
					variant="h4"
				>
					Live Speech Recognition for You and Your Friends!
				</Typography>
				<GoogleButton
				  onClick={() => { console.log('Google button clicked') }}
				/>
			</div>
	)
}
