import withSwapi from "../hocHelpers/withSwapi";
import ItemDetails, { Record } from '../itemDetails/itemDetails';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender'/>
            <Record field='birthYear' label='Birth Year'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = swapi => ({
    getData: swapi.getPerson,
    getImageUrl: swapi.getPersonImage
})

export default withSwapi(mapMethodsToProps)(PersonDetails);