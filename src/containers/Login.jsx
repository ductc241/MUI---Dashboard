import { useForm } from "react-hook-form";

import { 
    Box, Stack,
    Button, TextField,
    Typography,
    styled  
} from "@mui/material"

const BoxCenter = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25vh'
})

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <BoxCenter>
            <Typography variant="h4" component="div" mb={3} fontWeight={500}>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3} width={'400px'}>
                    <TextField
                        id="username" label="Username"
                        variant="outlined"
                        
                        {...register("username", {
                            required: 'Cho bố cái địa chỉ'
                        })}
                        error={ errors.username && true }
                        helperText={ errors.username && errors.username.message }
                    />
                    <TextField
                        id="password" label="Password"
                        type="password"
                        variant="outlined"
                        autoComplete="false"
                        {...register("password", {
                            required: 'Nhập mật khẩu vào'
                        })}
                        error={ errors.password && true }
                        helperText={ errors.password && errors.password.message }
                    />
                    <Button type="submit" variant="contained">Login</Button>
                </Stack>
            </form>
        </BoxCenter>
    )
}

export default Login