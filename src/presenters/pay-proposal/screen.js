import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import baseComponentStyle from '../../jss/base-component'
import Typography from '@material-ui/core/Typography'
import { ValidatorForm} from 'react-material-ui-form-validator'

const screen = (props) => {
  return (
    <div>
      <ValidatorForm
        name="form"
        onSubmit={e => {
          props.payProposal(props.user, props.proposal)
        }}
        onError={errors => console.log(errors)}
      >
        <Card className={props.classes.cardWithHeader}>
          <CardHeader
            classes={{
              root: props.classes.cardHeader,
              title: props.classes.cardHeaderContent,
              subheader: props.classes.cardHeaderContent,
            }}
            title="Pay for news article to be verified"
            subheader="Verification begins after payment"
          />
          <div className={props.classes.cardContent}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Typography variant='caption'>
                  News Article to Verify
                </Typography>
                <Typography variant='title'>
                  {props.proposal.url}
                </Typography>
                <br/>
                <Typography variant='caption'>
                  Cost
                </Typography>
                <Typography variant='title'>
                  1 SEM 
                </Typography>
                <Typography variant='subheading'>
                  (1 SEM = $0.17 USD - Updated 5 minutes ago from Binance)
                </Typography>
                <br/>
                <Typography variant='caption'>
                  Your SEM Balance
                </Typography>
                <Typography variant='title'>
                  {props.user ? props.user.sem : ''} SEM
                </Typography>
              </Grid>  
            </Grid>
            <Grid container spacing={16}>
              <Grid item xs={12} className={props.classes.contentRight}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="secondary" 
                  className={props.classes.button}
                >
                  Pay 1 SEM
                </Button>
              </Grid>
            </Grid>
          </div>
        </Card>
      </ValidatorForm>
    </div>
  )
}

export default withStyles(baseComponentStyle)(screen)