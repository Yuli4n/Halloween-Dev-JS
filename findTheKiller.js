function findTheKiller(whisper, suspects) {
    whisper = whisper.toLowerCase();
    let possibleSuspects = '';

    suspects.forEach(suspect => {
        let suspectName = suspect.toLowerCase();
        let isMatch = true;
        for (let i = 0; i < whisper.length; i++) {
            let whisperChar = whisper[i];
            if (whisperChar === '$') {
                if (suspectName.length !== i) {
                    isMatch = false;
                }
                break;
            }
            if (whisperChar !== '~' && whisperChar !== suspectName[i]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            possibleSuspects=possibleSuspects+','+suspect;
        }
    });

    return possibleSuspects.slice(1);
}

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller(whisper2, suspects2));
