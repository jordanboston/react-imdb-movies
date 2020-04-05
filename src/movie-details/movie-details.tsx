import React from 'react';
import HttpClient from '../utils/HttpClient';
import { API_KEY } from '../config';
import DetailsModal from '../details-modal/details-modal';

interface Props { }
interface State {
  movieDetails: any
}

class MovieDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);
    this.state = {
      movieDetails: {}
    };
  }

  getDetails = async (id: string) => {
    const request = HttpClient.get(
      `/en/API/Title/${API_KEY}/${id}/FullActor,FullCast,Trailer,Ratings,`
    )
      .then((response) => {
        if (response) {
          const movieDetails: any = response.results;
          this.setState({ movieDetails });
        }
        return response;
      })
      .catch((error) => {
        console.log('error', error);
      });
    return request;
  };

  // render() {
  //   return <DetailsModal movieDetails={this.state.movieDetails} />;
  // }
}

export default MovieDetails;