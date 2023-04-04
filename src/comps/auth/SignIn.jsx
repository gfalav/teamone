import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { purple } from '@mui/material/colors'
import { Link } from "react-router-dom"

const SignIn = () => {

    const validateSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Is required'),
        password: Yup.string().min(8,'Too short').required('Is required')
    })

    const formik = useFormik({
        initialValues: {
            email: 'gfalav@yahoo.com',
            password: 'pppppppp'
        },
        validationSchema: validateSchema,
    })

    return(
        <Box id="loginRoot"
            maxWidth={450}
            m={2}
            display='flex'
            flexDirection='column'
            flexWrap='nowrap'
            alignItems='center'
            >
            <Avatar sx={{ mb: 2, bgcolor: purple[500]}}><LockOpenIcon /></Avatar>
            <Typography variant="h4" sx={{ mb: 4}}>Sign In</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField  type="email" id="email" name="email" label="email"
                            fullWidth required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                />
                <TextField  type="password" id="password" name="password" label="password"
                            fullWidth required
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={{ mt: 1 }}
                />
                <Button variant="contained" sx={{ mt: 2}}>Send</Button>
            </form>
            <Box m={2}
                display='flex'
                flexDirection='row'
                flexWrap='nowrap'
                alignItems='center'>
                <Button component={Link} to='/auth/reset' variant="outlined" sx={{ mr: 1}}>Forgot your password?</Button>
                <Button component={Link} to='/auth/signup' variant="outlined">Need Account?</Button>
            </Box>
            
        </Box>
    )
}

export default SignIn