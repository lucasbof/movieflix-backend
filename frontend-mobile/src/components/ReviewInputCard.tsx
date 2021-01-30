import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { reviewInputCardCss } from '../styles';

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
        <View style={reviewInputCardCss.container}>
            <View>
                <TextInput
                    style={reviewInputCardCss.inputReview}
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
                        <TouchableOpacity
                            style={reviewInputCardCss.btnSaveContainer}
                            activeOpacity={0.8}
                            onPress={() => onSubmit(reviewForm)}
                        >
                            <Text style={reviewInputCardCss.btnSaveText}>SALVAR AVALIAÇÃO</Text>
                        </TouchableOpacity>
                    )
            }
        </View>
    );
};

export default ReviewInputCard;