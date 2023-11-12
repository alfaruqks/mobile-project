import {BlogList, CategoryList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';
 
// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>NulisKuy.</Text>{' '}
//         <Element3 color={colors.white()} variant="Linear" size={24} />
//       </View>
//       <View style={styles.listCategory}>
//         <FlatListCategory />
//       </View>
//       <ListBlog />
//     </View>
//   );
// }

// const ItemCategory = ({item, onPress, color}) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={category.item}>
//         <Text style={{...category.title, color}}>{item.categoryName}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const FlatListCategory = () => {
//   const [selected, setSelected] = useState(1);
//   const renderItem = ({item}) => {
//     const color = item.id === selected ? colors.white() : colors.grey();
//     return (
//       <ItemCategory
//         item={item}
//         onPress={() => setSelected(item.id)}
//         color={color}
//       />
//     );
//   };
//   return (
//     <FlatList
//       data={CategoryList}
//       keyExtractor={item => item.id}
//       renderItem={item => renderItem({...item})}
//       ItemSeparatorComponent={() => <View style={{width: 10}} />}
//       contentContainerStyle={{paddingHorizontal: 24}}
//       horizontalshowsHorizontalScrollIndicator={false}
//     />
//   );
// };

// const ListBlog = () => {
//   const horizontalData = BlogList.slice(0, 5);
//   const verticalData = BlogList.slice(5);
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.listBlog}>
//         <ListHorizontal data={horizontalData} />
//         <View style={styles.listCard}>
//           {verticalData.map((item, index) => (
//             <ItemSmall item={item} key={index} />
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// }; 
 
// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: colors.white()},
//   header: {
//     paddingHorizontal: 24,

//     backgroundColor: colors.green(),
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 52,
//     elevation: 8,
//     paddingTop: 8,
//     paddingBottom: 4,
//   },
//   title: {
//     fontSize: 20,
//     fontFamily: fontType['Pjs-ExtraBold'],
//     color: colors.white(),
//   },
//   listCategory: {
//     backgroundColor: colors.green(),
//     paddingVertical: 10,
//   },
//   listBlog: {
//     paddingVertical: 10,
//     gap: 10,
//   },
//   listCard: {gap: 30, paddingHorizontal: 24, paddingVertical: 10},
// });

// const category = StyleSheet.create({
//   item: {
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   title: {
//     fontFamily: fontType['Pjs-SemiBold'],
//     fontSize: 14,
//     lineHeight: 18,
//   },
// }); 
 

