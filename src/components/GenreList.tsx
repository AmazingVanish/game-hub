import { Card, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 156, 17, 18, 19];

    if (error) return null;
    // if (isLoading) return <Spinner />;

    return (
        <List>
            {isLoading && skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <Card borderRadius={8} margin="3px">
                        <HStack>
                            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Text fontSize="lg">{genre.name}</Text>
                        </HStack>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
