import { Button, Card, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface GenreListProps {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: GenreListProps) => {
    const { data, isLoading, error } = useGenres();
    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 156, 17, 18, 19,
    ];

    if (error) return null;

    return (
        <List>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GenreListSkeleton key={skeleton} />
                ))}
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <Card
                        bg={genre.id === selectedGenre?.id ? 'blue.500' : ''}
                        borderRadius={8}
                        margin="3px"
                    >
                        <HStack>
                            <Image
                                boxSize="64px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                onClick={() => onSelectedGenre(genre)}
                                fontSize="lg"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </Card>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
