import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Element3, Receipt21, Clock, Message} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>NulisKuy</Text>
          <Element3 color={colors.black()} variant="Linear" size={24} />
        </View>
        <View style={styles.listCategory}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{...category.item, marginLeft: 24}}>
              <Text style={{...category.title, color: colors.black()}}>
                Popular
              </Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Fantasy</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Technology</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>Terrify</Text>
            </View>
            <View style={category.item}>
              <Text style={category.title}>SuperHro</Text>
            </View>
            <View style={{...category.item, marginRight: 24}}>
              <Text style={category.title}>Lifestyle</Text>
            </View>
          </ScrollView>
        </View>
        <ListBlog />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white(),
    },
    header: {
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height:52,
      elevation: 8,
      paddingTop:8,
      paddingBottom:4
    },
    title: {
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
    },
    listCategory: {
      paddingVertical: 10,
    },
    listBlog: {
      paddingVertical: 10,
      gap: 10,
    },
  });
  const category = StyleSheet.create({
    item: {
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 25,
      alignItems: 'center',
      backgroundColor: colors.grey(0.08),
      marginHorizontal:5
    },
    title: {
      fontFamily: fontType['Pjs-SemiBold'],
      fontSize: 14,
      lineHeight: 18,
      color: colors.grey(),
    },
  })

  const ListBlog = () => {
    return (
      <ScrollView>
        <View style={styles.listBlog}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{gap: 15}}>
            <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Harry Potter
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                  <View>
                    <View style={itemHorizontal.cardIcon}>
                      <Receipt21 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={{
                  uri: 'https://yt3.ggpht.com/a/AGF-l7-ZzBXeXqPU2snaBZdS7gsvDVQj42zhJxQJOg=s900-c-k-c0xffffffff-no-rj-mo',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Hunger Games
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                  <View>
                    <View style={itemHorizontal.cardIcon}>
                      <Receipt21 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={{
                  uri: 'https://th.bing.com/th/id/OIP.V7VyZLa1C1kJorrNFC2oXAHaLG?pid=ImgDet&rs=1',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Gelombang
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                  <View>
                    <View style={itemHorizontal.cardIcon}>
                      <Receipt21 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={{
                  uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340606900l/15721334.jpg',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Negeri Para bedebah
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                  <View>
                    <View style={itemHorizontal.cardIcon}>
                      <Receipt21 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 15}}
                source={{
                  uri: 'https://i.pinimg.com/originals/01/35/75/013575becf114e1b5e6c2da0451440a5.jpg',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Negeri 5 menara
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                  <View>
                    <View style={itemHorizontal.cardIcon}>
                      <Receipt21 color={colors.white()} variant="Linear" size={20} />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://cdn.gramedia.com/uploads/items/9786020324784_Hujan-Cover-Baru-2018.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Technology</Text>
                    <Text style={itemVertical.cardTitle}>
                      Hujan
                    </Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://1.bp.blogspot.com/-hwQ-Ahp78bs/XxGp4XdS1II/AAAAAAAABCM/7dh0OpyMlq8Gzr34Qi9VB9c1rDpp45s5QCLcBGAsYHQ/s1600/bumii.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Fantasy</Text>
                    <Text style={itemVertical.cardTitle}>
                      Bumi
                    </Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://www.bukukita.com/babacms/displaybuku/116387_f.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Terrify</Text>
                    <Text style={itemVertical.cardTitle}>
                      Ritual
                    </Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348430767l/302792.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>SuperHero</Text>
                    <Text style={itemVertical.cardTitle}>New Empire</Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://th.bing.com/th/id/OIP.j4K6NCQdBiDJbiuesPZu7wHaKs?pid=ImgDet&w=1108&h=1600&rs=1',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Romance</Text>
                    <Text style={itemVertical.cardTitle}>
                      Dilan
                    </Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://th.bing.com/th/id/R.e2f3dbb1b31b640ce39631f70d4ade48?rik=IyWktz3cXxv2dw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-BgquVZh_FCE%2fT1xPDf08rBI%2fAAAAAAAAACc%2fCeUT-5iVUQI%2fs1600%2fayat-ayat-cinta.jpg&ehk=J%2bf4Iq7LkfDVQpDb5KXIPC7kJyV8t3r2gOnA0Hl%2bMEA%3d&risl=&pid=ImgRaw&r=0',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Romace</Text>
                    <Text style={itemVertical.cardTitle}>
                      Ayat-ayat Cinta
                    </Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://th.bing.com/th/id/OIP.jEfZKhyjrfdPFpHqcvENxgAAAA?pid=ImgDet&rs=1',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '70%'}}>
                    <Text style={itemVertical.cardCategory}>Populer</Text>
                    <Text style={itemVertical.cardTitle}>
                      Tenggelamnya Kapal Van Der Wijck
                    </Text>
                  </View>
                  <Receipt21
                    color={colors.grey(0.6)}
                    variant="Linear"
                    size={20}
                  />
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  const itemVertical = StyleSheet.create({
    listCard: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 15,
    },
    cardItem: {
      backgroundColor: colors.blue(0.03),
      flexDirection: 'row',
      borderRadius: 10,
    },
    cardCategory: {
      color: colors.blue(),
      fontSize: 10,
      fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Bold'],
      color: colors.black(),
    },
    cardText: {
      fontSize: 10,
      fontFamily: fontType['Pjs-Medium'],
      color: colors.blue(0.6),
    },
    cardImage: {
      width: 94,
      height: 94,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    cardInfo: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    cardContent: {
      gap: 10,
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingLeft: 15,
      flex: 1,
      paddingVertical: 10,
    },
  });
  const itemHorizontal = StyleSheet.create({
    cardItem: {
      width: 280,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 5,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
    },
    cardInfo: {
      justifyContent: 'flex-end',
      height: '100%',
      gap: 10,
      maxWidth: '60%',
    },
    cardTitle: {
      fontFamily: fontType['Pjs-Bold'],
      fontSize: 14,
      color: colors.white(),
    },
    cardText: {
      fontSize: 10,
      color: colors.white(),
      fontFamily: fontType['Pjs-Medium'],
    },
    cardIcon: {
      backgroundColor: colors.white(0.33),
      padding: 5,
      borderColor: colors.white(),
      borderWidth: 0.5,
      borderRadius: 5,
    },
  });