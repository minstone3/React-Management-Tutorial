import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
})

const customers = [
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동1',
      'birthday': '44444',
      'gender': '여1',
      'job': '프로그래머'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홍길동2',
        'birthday': '123',
        'gender': '여2',
        'job': '프로그래머'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '홍길동3',
        'birthday': '1223',
        'gender': '여3',
        'job': '프로그래머3'
    },

]

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
/*
 {

                          <Table>
                              
                              <TableBody>
                      customers.map(c => {
                                        return (
                                            <div>
                                            
                      </div>
                      )
                      }
                          </TableBody>
                          </Table>
              })
          }
      </div>
 */
export default withStyles(styles)(App);
