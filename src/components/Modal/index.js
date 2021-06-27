import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ValueInsertedContext from '../../contexts/Values';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const {
    lines,
    setLines,
    columns,
    setColumns,
    tableInput,
    setTableInput,
    currentTable,
    setCurrentTable
  } = useContext(ValueInsertedContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styleButton = {
    fontSize: '22px',
  }

  
  const setTable = () => {
    const checker = (i, i2) => {
      if(i == 0 && i2 == 0){
        return `FP \n[${i}][${i2}]`
      }
      else if(i == 0){
        return `CABEÇALHO \n[${i}][${i2}]`
      }
      else if(i2 == 0){
        return `ESTADO \n[${i}][${i2}]`
      }
      else return `VALOR \n[${i}][${i2}]`
    }
  
    for (let i = 0, i3 =0; i < lines; i++) {
      for (let i2 = 0; i2 < columns; i2++, i3++)
        setTableInput([tableInput, prompt(checker(i, i2))])
    }
    setCurrentTable(tableInput);
  }


  return (
    <div>
      <Button onClick={handleOpen}>
        Nova Tabela
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

        <div style={modalStyle} className={classes.paper}>
          <h2>Configuração Inicial</h2>
          <p>Número de Linhas: {lines}</p>
          <Button onClick={() => setLines(lines+1)} style={styleButton}>+</Button>
          <Button onClick={() => setLines(lines-1)} style={styleButton}>-</Button>
          <p>Número de Colunas: {columns}</p>
          <Button onClick={() => setColumns(columns+1)} style={styleButton}>+</Button>
          <Button onClick={() => setColumns(columns-1)} style={styleButton}>-</Button>
          <br />
          <Button onClick={() => setTable()} style={styleButton}>OK</Button>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;