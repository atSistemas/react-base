import React from 'react'

function PackageItem(props) {

    const { name, author, readme } = props.item

    return (
      <div className={styles.item}>
        {
          name &&
            <h2 className={styles.name}>{name} </h2>
        }

        {
          authorName &&
            <h2 className={styles.authorName}>by {authorName} </h2>
        }

        {
          readme &&
          <div dangerouslySetInnerHTML={{__html: marked(readme) }} />
        }

      </div>

    );
}

export default PackageItem
