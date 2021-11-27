import CardStyled from '../styles/Card.styled'
import cardImage from '../assets/img/card.png';
import { IMovie } from './types';
import { Button, Dropdown, Menu, Modal } from 'antd';
import { DownOutlined, DeleteOutlined, ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';

const { confirm } = Modal;

function Card({ movie, deleteHandler, edit, selectMovieHandler }: { movie: IMovie, selectMovieHandler: (id: string) => {}, deleteHandler: any, edit: any }) {

  const editHandler = (e: { preventDefault: () => void, stopPropagation: () => void }) => {
    e.preventDefault();
    e.stopPropagation();
    edit(movie.id)
  }

  const deleteMovie = () => {
    deleteHandler(movie.id)

  }

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this movie?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteMovie()
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={editHandler} type="dashed">
          <EditOutlined />
        </Button>
      </Menu.Item> 
      <Menu.Item >
        <Button onClick={showDeleteConfirm} danger type="dashed">
          <DeleteOutlined />
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <CardStyled onClick={() => selectMovieHandler(`${movie.id}`)}>
      <div className="card__img">
        <img src={movie.poster_path ? movie.poster_path : cardImage} alt="" />
        <div className="card__btns">
          <Dropdown overlay={menu}>
            <p className="ant-dropdown-link">
              <DownOutlined style={{ fontSize: "20px", color:"white" }} />
            </p>
          </Dropdown>
        </div>
      </div>
      <div className="card__info">
        <div className="card__row">
          <h2 className="card__title">
            {movie.title}
          </h2>
          <p className="card__release-date">
            {movie.release_date}
          </p>
        </div>
        <div className="card__tags">
          {movie.genres.map((item, index) => (
            <>
              <span className="card__tag" key={index}>
                {item}
              </span>
              {" "}
            </>
          ))}
        </div>
      </div>
    </CardStyled>
  )
}

export default Card
