import { Grid, TextField, Typography, Paper, Card, Box, Button, IconButton, InputAdornment, Avatar, CardHeader, CardContent, CardMedia, Stack, Slider, AvatarGroup, TableContainer, Table, TableHead, TableRow, TableBody } from '@mui/material'
import { styled } from '@mui/material/styles';
import styles from '../app/page.module.css'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import appIcon from '../../public/AppIcon.png'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';



const Home = () => {
  return (
    <>
      <Box className={styles.fullBody} gap={4}>
        <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'} className={styles.MainPage} px={4} py={4} spacing={8}>
          <Grid item md={6} xs={6} lg={6} >
            <Typography variant='h5' className={styles.textHeading}>Fully-Automated</Typography>
            <Typography variant='h5' className={styles.textHeadingPayroll}>Payroll</Typography>
            <Typography variant='h5' className={styles.textHeadingComplaince}>& Complaince</Typography>
            <Typography variant='h5' className={styles.textHeading} sx={{ marginBottom: '25px' }}>Software</Typography>

            <Typography sx={{ color: "#fff", marginBottom: '25px' }}>Athenaserv infotech PVT LTD establishes a key link between an organization and its customers. We have Extensive experience in delivering products, emprise project managment and services.</Typography>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      fontSize: '10px',
                      marginRight: '-12px'
                      // marginLeft: '-1px', // Adjust this value as needed
                    }}
                  >
                    Get Started
                  </Button>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} xs={6} lg={6}>
            <Card sx={{ background: 'black', color: 'white', width: '90%' }}>
              <CardMedia>
                <Grid container display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                  <Grid item>
                    <Avatar alt="Remy Sharp" src="profile.webp" variant='circular' sx={{ width: 110, height: 110 }} />
                  </Grid>
                  <Grid item>
                    <Typography>Lidson Garry</Typography>
                    <Typography>garry@gmail.com</Typography>
                  </Grid>
                </Grid>
              </CardMedia>
              <CardContent>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container display={'flex'} justifyContent={'space-between'} direction={'column'} alignItems={'center'} rowGap={5} p={2}>
          <Grid item alignItems={'center'} display={'flex'} pt={4} >
            <Stack spacing={6}>
              <img src='AppIcon.png' alt='Application Icon' style={{ width: '77px', marginLeft: '62px' }} />
              <Typography className={styles.textHeadingSolution}>Our Solutions</Typography>
            </Stack>
          </Grid>
          <Grid item direction={'row'} justifyContent={'space-between'} display={'flex'} columnGap={6}>
            <Typography className={styles.solutionTab}>UNIFIED COMMUNICATION</Typography>
            <Typography className={styles.solutionTab}>CONTACT CENTER</Typography>
            <Typography className={styles.solutionTab}>COLLABORATION</Typography>
            <Typography className={styles.solutionTab}>HEALTH CARE</Typography>
            <Typography className={styles.solutionTab}>HEALTH CARE</Typography>
          </Grid>
          <Grid item container display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'row'} sx={{ border: '2px solid blue', width: '80%', height: '40vh', borderRadius: '30px' }}>
            <Grid item md={6} lg={6} sx={6} pl={6} rowSpacing={4}>
              <Typography className={styles.textHeading}>Health Care</Typography>
              <Typography sx={{ color: "#fff", marginBottom: '25px' }}>Global consultancy services company focused on helping you make an impaction business and drive value through your IT
                investments.</Typography>
              <Button className={styles.readMore}>Read More</Button>
            </Grid>
            <Grid item md={6} lg={6} sx={6}>
              <img src='doctorImages.jpg' style={{ width: '60%' }} />
            </Grid>
          </Grid>

          <Grid container display={'flex'} direction={'row'} alignItems={'center'} rowGap={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Stack spacing={4} alignItems={'center'} p={6}>
                <Typography className={styles.textHeadingSolution}>Our services</Typography>
                <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>Athenaserv infotech PVT LTD establishes a key link between an organization and its customers. We have Extensive experience in delivering products, emprise project managment and services.Athenaserv infotech PVT LTD establishes a key link between an organization and its customers.</Typography>
              </Stack>
            </Grid>
            <Grid item container display={'flex'} justifyContent={'space-evenly'} alignContent={'center'} flexDirection={'row'} className={styles.borderGradient1} sx={{ width: '80%', margin: '0 auto', display: 'table', height: '50vh', borderRadius: '30px' }} spacing={4}>
              <Grid item md={12} lg={12} sx={12}>
                <Stack spacing={2} alignItems={'center'} p={4}>
                  <Typography className={styles.textHeading}>Augmentation services</Typography>
                  <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>We help you in identifiying and training the right resources and help you overcomes your biggest challenges</Typography>
                </Stack>
              </Grid>
              <Grid item container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item md={4} lg={4} xs={4}>
                  <Card sx={{ background: '#29292ad6' }}>
                    <CardHeader
                      avatar={
                        <Avatar alt="Remy Sharp" src="profile.webp" variant='circular' sx={{ width: 50, height: 60 }} />
                      }
                      title={"Wade Warner"}
                      subheader={"Project Manager"}
                    />
                    <CardContent>
                      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </CardContent>

                  </Card>
                </Grid>
                <Grid item md={4} lg={4} xs={4} display={'flex'} justifyContent={'center'}>
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="profile.webp" />
                    <Avatar alt="Travis Howard" src="profile.webpg" />
                    <Avatar alt="Cindy Baker" src="profile.webp" />
                    <Avatar alt="Agnes Walker" src="profile.webp" />
                    <Avatar alt="Trevor Henderson" src="profile.webp" />
                  </AvatarGroup>
                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                  <Card sx={{ background: '#29292ad6' }}>
                    <CardHeader
                      avatar={
                        <Avatar alt="Remy Sharp" src="profile.webp" variant='circular' sx={{ width: 50, height: 60 }} />
                      }
                      title={"Wade Warner"}
                      subheader={"Project Manager"}
                    />
                    <CardContent>
                      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </CardContent>

                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container display={'flex'} justifyContent={'space-around'} direction={'row'} alignItems={'center'} p={4}>
              <Grid item md={4} lg={4} sx={{ borderRadius: '10px' }} className={styles.borderGradient2} spacing={2} alignContent={'center'}>
                <Typography className={styles.textHeading} sx={{ textAlign: 'center', padding: '20px' }}>consulting</Typography>
                <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>Our fact-based consulting services are designed to help you make informed designed and optmize your  It operations</Typography>
              </Grid>
              <Grid item md={4} lg={4} sx={{ borderRadius: '10px' }} className={styles.borderGradient3}>
                <Typography className={styles.textHeading} sx={{ textAlign: 'center', padding: '20px' }}>Health Care</Typography>
                <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>Our fact-based consulting services are designed to help you make informed designed and optmize your  It operations</Typography>
              </Grid>
            </Grid>
            <Grid item container display={'flex'} justifyContent={'space-evenly'} direction={'row'} alignItems={'center'} p={4} style={{ width: '98%' }}>
              <Grid item md={2.5} lg={2.5} className={styles.borderGradient3} sx={{ borderRadius: '10px', }} spacing={2} alignContent={'center'}>
                <Typography className={styles.textHeading} sx={{ textAlign: 'center', padding: '20px' }}>Staffing & Training</Typography>
                <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>Our fact-based consulting services are designed to help you make informed designed and optmize your  It operations</Typography>
              </Grid>
              <Grid item md={3} lg={3} className={styles.borderGradient2} sx={{ border: '2px solid blue', borderRadius: '10px' }}>
                <Typography className={styles.textHeading} sx={{ textAlign: 'center', padding: '20px' }}>Managed Services</Typography>
                <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>Our fact-based consulting services are designed to help you make informed designed and optmize your  It operations</Typography>
              </Grid>
              <Grid item md={2.5} lg={2.5} className={styles.borderGradient1} sx={{ border: '2px solid blue', borderRadius: '10px' }}>
                <Typography className={styles.textHeading} sx={{ textAlign: 'center', padding: '20px' }}>CRM</Typography>
                <Typography sx={{ color: "#fff", marginBottom: '25px', textAlign: 'center' }}>Our fact-based consulting services are designed to help you make informed designed and optmize your  It operations</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home;