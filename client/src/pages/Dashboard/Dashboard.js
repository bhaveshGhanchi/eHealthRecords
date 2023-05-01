import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../../sections/@dashboard/app';

import Header from '../Header/Header';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
    <Header />
    <div className='mainPage' >
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Patients" total={5} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Doctors" total={4} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="<>" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="<>" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Age of patients"
              chartLabels={[
                '1',
                '5',
                '10',
                '14',
                '18',
                '25',
                '35',
                '40',
                '45',
                '50',
                '60',
              ]}
              chartData={[
                {
                  name: 'Total',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 25, 22, 27, 23, 22, 37, 42, 44, 45, 50],
                },
                {
                  name: 'Females',
                  type: 'area',
                  fill: 'gradient',
                  data: [10, 13, 12, 14, 18, 9, 14, 19, 21, 26, 30],
                },
                {
                  name: 'Males',
                  type: 'line',
                  fill: 'solid',
                  data: [13, 12, 10, 13, 5, 13, 23, 23, 23, 19, 20],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Patient Demographics - Gender"
              chartData={[
                { label: 'Male', value: 2 },
                { label: 'Female', value: 3 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Most used keywords"
              subheader="Symptoms"
              chartData={[
                { label: 'fever', value: 5 },
                { label: 'cold', value: 3 },
                { label: 'cough', value: 4 },
                { label: 'chest pain', value: 2 },
                { label: 'headache', value: 3 },
                { label: 'stomach pain', value: 1 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Residence of Patients"
              chartLabels={['Mumbai', 'Thane', 'Navi Mumbai']}
              chartData={[
                { name: 'Count', data: [80, 50, 30] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Patient Demographics - Maritial Status"
              chartData={[
                { label: 'Married', value: 5 },
                { label: 'Unmarried', value: 7 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Age vs Addictions"
              chartLabels={[
                '14',
                '18',
                '25',
                '35',
                '40',
                '45',
                '50',
                '60',
              ]}
              chartData={[
                {
                  name: 'No of Patients',
                  type: 'column',
                  fill: 'solid',
                  data: [3, 10, 27, 36, 33, 28, 30, 25],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </div>
    </>
  );
}