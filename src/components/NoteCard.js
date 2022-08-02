import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Avatar, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styles } from "../styles/Styles";
import {useNavigate} from 'react-router-dom'

const NoteCard = ({ note, handleDelete ,handleEdit}) => {
  const navigate = useNavigate()
  const { title, details, category, id } = note;
  return (
    <Card elevation={4}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: styles.avatar(category) }}>
            {category ? category[0].toUpperCase() : title[0].toUpperCase()}
          </Avatar>
        }
        action={
          <>
            <IconButton>
              <EditIcon onClick={() => navigate(`edit/${id}`)} />
            </IconButton>
            <IconButton>
              <DeleteIcon onClick={() => handleDelete(id)} />
            </IconButton>
          </>
        }
        title={title}
        subheader={category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
