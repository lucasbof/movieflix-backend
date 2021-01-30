import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

type Props = {
    onSubmit: (dataForm: FormState) => Promise<void>;
    isReviewLoading: boolean;
}

type FormState = {
    text: string;
}

const ReviewInputCard = ({ onSubmit, isReviewLoading }: Props) => {

    const [reviewForm, setReviewForm] = useState<FormState>({ text: '' });

    return (
        <View>
            <View>
                <TextInput
                    multiline
                    placeholder="Deixe sua avaliação aqui"
                    value={reviewForm.text}
                    onChangeText={(text) => setReviewForm({ text })}
                />
            </View>
            {
                isReviewLoading ?
                    (<ActivityIndicator color="gray" size="large" />)
                    : (
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => onSubmit(reviewForm)}
                            >
                                <Text>SALVAR AVALIAÇÃO</Text>
                            </TouchableOpacity>
                        </View>
                    )
            }
        </View>
    );
};

export default ReviewInputCard;