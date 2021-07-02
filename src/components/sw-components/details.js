import ItemDetails, { Record } from '../itemDetails/itemDetails';
import { SwapiConsumer } from '../swapiServiceContext/swapiServiceContext';

export const PersonDetails = ({itemId}) => {
    return (
        <SwapiConsumer>
            {
                swapi => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={swapi.getPerson}
                            getImageUrl={swapi.getPersonImage}
                        >
                            <Record field='gender' label='Gender'/>
                            <Record field='birthYear' label='Birth Year'/>
                            <Record field='eyeColor' label='Eye Color'/>
                        </ItemDetails>
                    )
                }
            }
            
        </SwapiConsumer>
    )
}

export const PlanetDetails = ({itemId}) => {
    return (
        <SwapiConsumer>
            {
                swapi => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={swapi.getPlanet}
                            getImageUrl={swapi.getPlanetImage}
                        >
                            <Record field='population' label='Population'/>
                            <Record field='rotation_period' label='Rotation Period'/>
                            <Record field='diameter' label='Diameter'/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiConsumer>

    )
}

export const StarshipDetails = ({itemId}) => {
    return (
        <SwapiConsumer>
            {
                swapi => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={swapi.getStarship}
                            getImageUrl={swapi.getStarshipImage}
                        >
                            <Record field='model' label='Model'/>
                            <Record field='cost_in_credits' label='Cost'/>
                            <Record field='length' label='Length'/>
                            <Record field='crew' label='Crew'/>
                            <Record field='passengers' label='Passengers'/>
                        </ItemDetails>

                    )
                }
            }
        </SwapiConsumer>
    )
}