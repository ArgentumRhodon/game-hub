import {
    HStack,
    List,
    ListItem,
    Image,
    Text,
    Skeleton,
    SkeletonText,
    Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (error) {
        return null;
    }

    return (
        <List>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <ListItem key={skeleton} paddingY="5px">
                        <HStack>
                            <Skeleton height="32px" width="32px" />
                            <SkeletonText noOfLines={2} width="100px" />
                        </HStack>
                    </ListItem>
                ))}
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageURL(genre.image_background)}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            fontSize="lg"
                            variant="link"
                            fontWeight={
                                genre.id === selectedGenre?.id
                                    ? "bold"
                                    : "normal"
                            }
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
