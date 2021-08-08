
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';



import start from '../../../../assets/star'
import open from '../../../../assets/open';
import Spacer from '../../../components/spacer/spacer.component'

const RestaurantCard = styled(Card)`

backgroundColor: white
`
const RestaurantCardCover = styled(Card.Cover)`   
    backgroundColor: white
`

const Addres = styled.Text`
font-family: ${(props) => props.theme.fonts.body}
fontSize: ${(props) => props.theme.fontSizes.caption};

`


const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.heading}
color: ${(props) => props.theme.colors.ui.primary};
fontSize: ${(props) => props.theme.fontSizes.title};

`
const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`


const Rating = styled.View`
flex-direction:row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[1]};
`
const Section = styled.View` 
flex-direction: row;
align-items: center;
justify-content: center
`
const SectionEnd = styled.View` 
flex:1;
flex-direction:row;
justify-content:flex-end;
`
const Open = styled(SvgXml)`
flex-direction: row;
`

const Text = styled.Text`
color: ${(props) => props.theme.colors.ui.error}
fontSize: ${(props) => props.theme.fontSizes.caption};

`

const Image = styled.Image`
 width:20px;
 height:20px;
`



const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon =
        "https://th.bing.com/th/id/OIP.UE_RUY52wvs46XuqRbJIgAHaHa?pid=ImgDet&rs=1"
        ,
        photos = [
            "https://res.cloudinary.com/sagui-tech/image/upload/v1628265572/samples/food/9F8DCC59-D114-4296-B2E1-5B9D4127F005_oamkuh.jpg"
        ],
        address = " 224 Some street",
        isOpenNow = true,
        rating = 3,
        isClosedTemporarily = true
    } = restaurant;


    const ratingArray = Array.from(new Array(Math.floor(rating)))
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name}
                source={{ uri: photos[0] }} />

            <Info>
                <Title>{name} </Title>

                <Section>

                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={start} width={23} height={22} />
                        ))}
                    </Rating>


                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="lable" > CLOSED TEMPORARILY </Text>
                        )}

                        <Spacer position="left" size="medium">
                            {isOpenNow && <Open xml={open} width={22} height={22} />}
                        </Spacer>

                        <Spacer position="left" size="medium">
                            <Image source={{ uri: icon }} />
                        </Spacer>

                    </SectionEnd>
                </Section>

                <Addres>{address}</Addres>
            </Info>


        </RestaurantCard>
    );
}

const styles = StyleSheet.create({

});


export default RestaurantInfo;
