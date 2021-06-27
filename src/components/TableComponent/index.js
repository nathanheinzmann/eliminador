import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ValueInsertedContext from '../../contexts/Values';

const TableComponent = () => {
  const { 
    currentTable,
    setCurrentTable,
  } = useContext(ValueInsertedContext);

  var { 
    originalTable,
    accessed,
    notAccessed,
    values,
    mortos
  } = useContext(ValueInsertedContext);

  var newTable = originalTable;

  const [isVerified, setIsVerified] = useState(false);

  const verificador = () => {
    values += originalTable [1][1];
    values += originalTable [1][2];
    values += originalTable [1][3];
  
    for(let i=1; i<originalTable.length; i++){ // OBTENDO OS ESTADOS MORTOS
      let flag = 0;
      for(let i2=1; i2<=3; i2++){
        if((originalTable[i][0]/1 || originalTable[i][0]/1 == 0)){
          if(originalTable[i][0] != originalTable[i][i2]) flag++;
        }
        else flag++
      }
      if(flag === 0) mortos += originalTable[i][0];
    }  
  
    for(let i=1; i<originalTable.length-1; i++){ // OBTENDO OS NAO ACESSADOS
      let x = values.indexOf(i)
      if (x>=0){
        for(let i2=1; i2<=3; i2++){
          values += originalTable[i+1][i2]
        }
      }
      else notAccessed += i;
    }    
    for(let i=0; i<values.length; i++){ // OBTENDO OS ACESSADOS
      let x = accessed.indexOf(values[i])
      x > 0 ? {} : accessed += values[i]
    }
    setIsVerified(true);
    for(let i=1; i<originalTable.length; i++){ // PASSANDO PARA O CURRENT O NOVO VETOR
      let i2 = 0;
      if(notAccessed.indexOf(originalTable[i][0]) != -1){
        newTable[i] = [];
      }
    }
    setCurrentTable(newTable);
    alert(`
      Percurso alcançado: ${values}\n
      Acessados: ${accessed}\n
      Não acessados: ${notAccessed}\n
      Estados mortos: ${mortos}
    `)
  }

  const useStyles = makeStyles({
    table: {
      maxWidth: '100%',
    },
  });
  const classes = useStyles();

  const originalState = () => {
    setIsVerified(false);
    setCurrentTable(originalTable);
  }

  return(
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          {currentTable.map((item) => (
            <TableRow>
              {item.map((values)=>(
                <TableCell align="center">{values}</TableCell>
              ))
              }
            </TableRow>
          ))}
        </Table>
      </TableContainer>
        {!isVerified ? 
          <Button onClick={verificador}>Relatório</Button>
          :
          <Button onClick={originalState}>Original</Button>
        }
    </div>
  );
}

export default TableComponent;