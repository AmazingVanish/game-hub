import { Card, CardBody, HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <ListItem paddingY="5px">
            <Card height="32px" borderRadius={8} margin="3px">
                <HStack>
                    <Skeleton height="32px" />
                    <CardBody>
                        <SkeletonText height="32px" />
                    </CardBody>
                </HStack>
            </Card>
        </ListItem>
    );
};

export default GameCardSkeleton;
