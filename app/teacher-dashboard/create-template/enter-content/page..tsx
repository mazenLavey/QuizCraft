


const EnterContent: React.FC = () => {
    return (
        <div>
            <form>
                <label htmlFor="title">Activity Title</label>
                <input type="text" name="title" id="title"/>

                <label htmlFor="instruction">Instruction</label>
                <input type="text" name="instruction" id="instruction"/>
            </form>
        </div>
    );
};

export default EnterContent;