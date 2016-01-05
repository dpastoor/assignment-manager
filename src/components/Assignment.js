import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import moment from 'moment';
export const Assignment = (props) =>
 (
   <Card initiallyExpanded={props.expanded}>
     <CardHeader
       title={props.data.name}
       subtitle={props.data.class}
       actAsExpander={true}
       showExpandableButton={true} />
     <CardText expandable={true}>
       Due on {props.data.dueDate.calendar()}
     </CardText>
     <CardActions expandable={true}>
       <FlatButton label="Submit Assignment"/>
       <FlatButton label="Download Assignment Materials"/>
     </CardActions>
   </Card>
  )
