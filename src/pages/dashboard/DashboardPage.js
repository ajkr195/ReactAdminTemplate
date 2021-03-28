import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import AppBreadcrumbs from "../../components/AppBreadcrumbs/AppBreadcrumbs";
import AppChart from "../../components/AppChart/AppChart";
import AppBarChart from "../../components/AppChart/AppBarChart";
import AppPieChart from "../../components/AppChart/AppPieChart";
import SimpleTable from "./components/SimpleTable";
import clsx from "clsx";

const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: "16px",
  },
  visitorChart: {
    // height: "150px"
  },
}));

const DashboardPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <AppLayout>
      <h1>Dashboard</h1>

      <AppBreadcrumbs path={history} />
      <Grid container spacing={2}>
        <Grid className={classes.visitorChart} item xs={12}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Visitors
            </Typography>
            <AppChart />
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Foods
              </Typography>
              <SimpleTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Sales
              </Typography>
              <AppBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Customers
            </Typography>
            <AppPieChart />
          </Paper>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default DashboardPage;
