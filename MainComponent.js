import React, {Component} from "react";
import {View, Image, TouchableOpacity,Alert, TouchableHighlight, TouchableNativeFeedback,Text,ImageBackground,
            ScrollView} from 'react-native'

export default class MainComponent extends Component{

    // 화면 갱신에 영향을 미치는 아주 특별한 변수 : state
    state = {
        imgNum: 0,  // 보여줄 이미지를 가진 배열의 index 번호
        imgArr: [
            require('./image/moana01.jpg'), 
            require('./image/moana02.jpg'),
            require('./image/moana03.jpg'),
            require('./image/moana04.jpg'),
            require('./image/moana05.jpg'),
            // 네트워크상에 있는 이미지는
            {uri:'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_1280.jpg'},
            {uri:'https://cdn.pixabay.com/photo/2022/05/31/17/14/bird-7233900_1280.jpg'}
        ]
    }

    render(){
        return (
            // 전체 뷰에 배경이미지 적용하기 - 스타일로 적용 불가
            // 배경 이미지로 뷰가 따로 있음.
            <ScrollView style={{flex:1,}} horizontal={false}>
                <ImageBackground
                    source={{uri:'https://cdn.pixabay.com/photo/2022/05/31/00/56/sky-7232494_1280.jpg'}}
                    style={{width:'100%', height:'100%',flexDirection:'column'}}
                    resizeMode="stretch">

                        {/* 그림 이미지는 require() 함수 이용 : 별도의 스타일이 없다면 기본 사이즈 */}
                        <Image 
                            style={{width:200, height:100}} 
                            source={require('./image/moana01.jpg')}>
                        </Image>

                        {/* 네트워크상에 있는 이미지를 보여주기 : uri라는 이름의 멤버를 가진 객체를 소스로 설정 */}
                        {/* 네트워크 이미지는 사이즈 지정이 없으면 보이지 않음 */}
                        <Image
                            source={{uri:'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_1280.jpg'}}
                            style={{width:200, height:100}}>
                        </Image>

                        {/* 이미지의 클릭이벤트 처리 : Image 컴포넌트는 onPress라는 속성이 없음 */}
                        {/* 클릭이벤트에 반응하는 컴포넌트들이 별도로 존재함. : Touchable~~~~~ */}
                        <TouchableOpacity 
                            onPress={this.clickImage}>
                            <Image    
                                source={require('./image/moana02.jpg')}
                                style={{width:200, height:100}}>
                            </Image>
                        </TouchableOpacity>

                        <TouchableHighlight 
                            onPress={this.clickImage} style={{padding:4, width:208}}>
                            <Image    
                                source={require('./image/moana02.jpg')}
                                style={{width:200, height:100}}>
                            </Image>
                        </TouchableHighlight>

                        {/* 안드로이드의 클릭 피드백 효과 (물결효과) */}
                        <TouchableNativeFeedback
                            onPress={this.clickImage}>
                            <View
                                style={{padding:4, width:208, borderWidth:2, borderRadius:4, marginLeft:16}}>
                                    <Text>Moana</Text>  
                                    <Image    
                                        source={require('./image/moana04.jpg')}
                                        style={{width:200, height:100}}>
                                    </Image>
                            </View>
                            
                        </TouchableNativeFeedback>
                        
                        <TouchableOpacity
                            onPress={this.changeImage}>
                                <Image
                                    style={{width:200, height:100}}
                                    source={this.state.imgArr[this.state.imgNum]}>
                                </Image>
                        </TouchableOpacity>
                        <Image 
                            style={{width:200, height:100}} 
                            source={require('./image/moana01.jpg')}>
                        </Image>

                </ImageBackground>

                
                
            </ScrollView>
            
        )
    }

    changeImage=()=>{
        var index=this.state.imgNum +1
        if(index>6) index=0
        this.setState({imgNum:index})
    }
    // 이미지 클릭에 반응하는 콜백 메소드
    clickImage=()=>{
        //Alert.alert('clicked Image')
    }

}