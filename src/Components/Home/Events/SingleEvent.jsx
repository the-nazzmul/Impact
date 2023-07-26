

const SingleEvent = ({event}) => {
    return (
      <div>
        <p>{event.name}</p>
        <img className="" src={event.image_url} alt="event picture"  />
      </div>
    );
};

export default SingleEvent;